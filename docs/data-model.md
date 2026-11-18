# StudyPal & SkillConnect – Data Model

## Entities

### Student

- student_id (PK)
- name
- email
- password_hash
- bio

### Course

- course_id (PK)
- course_code
- course_name
- description

### StudyGroup

- group_id (PK)
- group_name
- description
- course_id (FK)
- created_by (FK → Student.student_id)

### GroupMembership

- membership_id (PK)
- student_id (FK → Student.student_id)
- group_id (FK → StudyGroup.group_id)
- joined_at

## Relationships

- One Student can create many Study Groups.
- One Course can have many Study Groups.
- Students and Study Groups have a many-to-many relationship through GroupMembership.
