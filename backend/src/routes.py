from fastapi import APIRouter, HTTPException, Query
from typing import Optional
from datetime import datetime

from .models import AnatomyNoteCreate, AnatomyNoteUpdate, AnatomyNoteResponse, BodyPart
from .database import AnatomyNote

router = APIRouter(prefix="/api/anatomy-notes", tags=["anatomy-notes"])

@router.post("/", response_model=AnatomyNoteResponse)
async def create_note(note: AnatomyNoteCreate):
    """Create a new anatomy note"""
    try:
        note_dict = note.dict()
        created_note = AnatomyNote.create(note_dict)
        return created_note
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/", response_model=list[AnatomyNoteResponse])
async def list_notes(
    body_part: Optional[BodyPart] = Query(None),
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=1000)
):
    """Get all anatomy notes with optional filtering by body part"""
    try:
        body_part_value = body_part.value if body_part else None
        notes = AnatomyNote.get_all(body_part=body_part_value, skip=skip, limit=limit)
        return notes
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{note_id}", response_model=AnatomyNoteResponse)
async def get_note(note_id: str):
    """Get a specific anatomy note by ID"""
    try:
        note = AnatomyNote.get_by_id(note_id)
        if not note:
            raise HTTPException(status_code=404, detail="Note not found")
        return note
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/{note_id}", response_model=AnatomyNoteResponse)
async def update_note(note_id: str, note: AnatomyNoteUpdate):
    """Update an anatomy note"""
    try:
        # Check if note exists
        existing_note = AnatomyNote.get_by_id(note_id)
        if not existing_note:
            raise HTTPException(status_code=404, detail="Note not found")
        
        # Update only provided fields
        update_data = note.dict(exclude_unset=True)
        updated_note = AnatomyNote.update(note_id, update_data)
        
        if not updated_note:
            raise HTTPException(status_code=500, detail="Failed to update note")
        return updated_note
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/{note_id}")
async def delete_note(note_id: str):
    """Delete an anatomy note"""
    try:
        # Check if note exists
        existing_note = AnatomyNote.get_by_id(note_id)
        if not existing_note:
            raise HTTPException(status_code=404, detail="Note not found")
        
        success = AnatomyNote.delete(note_id)
        if not success:
            raise HTTPException(status_code=500, detail="Failed to delete note")
        
        return {"message": "Note deleted successfully", "id": note_id}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/search/by-tag/{tag}", response_model=list[AnatomyNoteResponse])
async def search_by_tag(tag: str):
    """Search anatomy notes by tag"""
    try:
        notes = AnatomyNote.search_by_tag(tag)
        return notes
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
