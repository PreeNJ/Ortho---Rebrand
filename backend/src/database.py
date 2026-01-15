from pymongo import MongoClient
from datetime import datetime
from typing import Optional
import os
from bson.objectid import ObjectId

# MongoDB connection
MONGO_URI = os.environ.get('MONGO_URI', 'mongodb://localhost:27017/ortho_rebrand')
client = MongoClient(MONGO_URI)
db = client.get_database()

# Collection for anatomy notes
anatomy_notes_collection = db['anatomy_notes']

# Create index for better query performance
anatomy_notes_collection.create_index('body_part')
anatomy_notes_collection.create_index('tags')
anatomy_notes_collection.create_index('created_at')

class AnatomyNote:
    """Database model for anatomy notes using MongoDB"""
    
    @staticmethod
    def create(note_data: dict) -> dict:
        """Create a new anatomy note"""
        note_data['created_at'] = datetime.utcnow()
        note_data['updated_at'] = datetime.utcnow()
        result = anatomy_notes_collection.insert_one(note_data)
        note_data['id'] = str(result.inserted_id)
        return note_data
    
    @staticmethod
    def get_by_id(note_id: str) -> Optional[dict]:
        """Get a note by ID"""
        try:
            note = anatomy_notes_collection.find_one({'_id': ObjectId(note_id)})
            if note:
                note['id'] = str(note['_id'])
                del note['_id']
            return note
        except:
            return None
    
    @staticmethod
    def get_all(body_part: Optional[str] = None, skip: int = 0, limit: int = 100) -> list[dict]:
        """Get all anatomy notes with optional filtering"""
        query = {}
        if body_part:
            query['body_part'] = body_part
        
        notes = list(anatomy_notes_collection.find(query).skip(skip).limit(limit).sort('created_at', -1))
        for note in notes:
            note['id'] = str(note['_id'])
            del note['_id']
        return notes
    
    @staticmethod
    def update(note_id: str, update_data: dict) -> Optional[dict]:
        """Update a note"""
        try:
            update_data['updated_at'] = datetime.utcnow()
            result = anatomy_notes_collection.find_one_and_update(
                {'_id': ObjectId(note_id)},
                {'$set': update_data},
                return_document=True
            )
            if result:
                result['id'] = str(result['_id'])
                del result['_id']
            return result
        except:
            return None
    
    @staticmethod
    def delete(note_id: str) -> bool:
        """Delete a note"""
        try:
            result = anatomy_notes_collection.delete_one({'_id': ObjectId(note_id)})
            return result.deleted_count > 0
        except:
            return False
    
    @staticmethod
    def search_by_tag(tag: str) -> list[dict]:
        """Search notes by tag"""
        notes = list(anatomy_notes_collection.find({'tags': tag}).sort('created_at', -1))
        for note in notes:
            note['id'] = str(note['_id'])
            del note['_id']
        return notes
