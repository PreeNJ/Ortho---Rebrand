from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from enum import Enum

class BodyPart(str, Enum):
    """Enum for anatomical body parts"""
    ELBOW = "elbow"
    KNEE = "knee"
    SHOULDER = "shoulder"
    ANKLE = "ankle"
    WRIST = "wrist"
    HIP = "hip"
    SPINE = "spine"
    OTHER = "other"

class AnatomyNoteCreate(BaseModel):
    """Schema for creating a new anatomy note"""
    title: str = Field(..., min_length=1, max_length=200)
    body_part: BodyPart
    content: str = Field(..., min_length=1)
    clinical_notes: Optional[str] = None
    tags: Optional[list[str]] = []

class AnatomyNoteUpdate(BaseModel):
    """Schema for updating an anatomy note"""
    title: Optional[str] = Field(None, min_length=1, max_length=200)
    body_part: Optional[BodyPart] = None
    content: Optional[str] = Field(None, min_length=1)
    clinical_notes: Optional[str] = None
    tags: Optional[list[str]] = None

class AnatomyNoteResponse(BaseModel):
    """Schema for responding with anatomy note data"""
    id: str
    title: str
    body_part: BodyPart
    content: str
    clinical_notes: Optional[str]
    tags: list[str]
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
