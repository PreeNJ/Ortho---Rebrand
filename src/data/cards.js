import { FaBone, FaHeart, FaNotesMedical, FaBandAid, FaBook, FaSearch, FaBookOpen, FaPills, FaAnchor, FaCogs, FaCube, FaDna } from 'react-icons/fa'
import { GiStethoscope } from 'react-icons/gi'
import KneeIcon from '../components/icons/KneeIcon'

export const cards = [
  { id: 'tumors', title: 'Tumors', description: 'Comprehensive guide to bone and soft tissue tumors', headerBg: '#E8F0FF', icon: FaBone },
  { id: 'anatomy', title: 'Anatomy', description: 'Detailed orthopedic and musculoskeletal anatomy', headerBg: '#E8FCEC', icon: GiStethoscope },
  { id: 'arthritis', title: 'Arthritis', description: 'Types, diagnosis and management of arthritis', headerBg: '#F8EAF9', icon: KneeIcon },
  { id: 'casting', title: 'Casting & Splinting', description: 'Techniques and guidelines for immobilization', headerBg: '#FFF4DB', icon: FaBandAid },
  { id: 'physiology', title: 'Physiology', description: 'Musculoskeletal physiology fundamentals', headerBg: '#EEF2FF', icon: FaDna },
  { id: 'traction', title: 'Traction', description: 'Principles and techniques of orthopedic traction', headerBg: '#EAF8F4', icon: FaAnchor },
  { id: 'pharmacology', title: 'Pharmacology', description: 'Drug mechanisms, dosages, and side effects', headerBg: '#F4F6F8', icon: FaPills },
  { id: 'materials', title: 'Material Science', description: 'Orthopedic biomaterials, properties, and selection', headerBg: '#EDE7FE', icon: FaCube },
  { id: 'biomechanics', title: 'Biomechanics', description: 'Clinical and mechanical principles of movement', headerBg: '#FFF1F3', icon: FaCogs }
]
