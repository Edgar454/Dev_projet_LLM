-- =========================================
-- INTERVIEW SIMULATOR DATABASE SCHEMA
-- =========================================

-- 1. SESSIONS TABLE
-- Stores the global state of an interview session
-- =========================================

CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    domain VARCHAR(100) NOT NULL,
    interview_type VARCHAR(50) NOT NULL,
    difficulty INT NOT NULL DEFAULT 1,
    question_count INT NOT NULL DEFAULT 0,
    current_score FLOAT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- =========================================
-- 2. MESSAGES TABLE
-- Stores Q/A history
-- =========================================

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
    role VARCHAR(20) NOT NULL
        CHECK (role IN ('question', 'answer')),

    question_id INT NULL
        REFERENCES messages(id) ON DELETE CASCADE,

    content TEXT NOT NULL,
    technical_score INT,
    clarity_score INT,
    created_at TIMESTAMP DEFAULT NOW(),

    -- enforce relationship rule
    CHECK (
        (role = 'question' AND question_id IS NULL)
        OR
        (role = 'answer' AND question_id IS NOT NULL)
    )
);

-- =========================================
-- 3. WEAKNESSES TABLE (optional but useful for analysis)
-- =========================================

CREATE TABLE weaknesses (
    id SERIAL PRIMARY KEY,
    session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
    weakness TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- =========================================
-- 4. INDEXES (important for performance)
-- =========================================

CREATE INDEX idx_messages_session
ON messages(session_id);

CREATE INDEX idx_weaknesses_session
ON weaknesses(session_id);

-- =========================================
-- 5. AUTO TIMESTAMP UPDATE FUNCTION
-- =========================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =========================================
-- 6. TRIGGER FOR sessions.updated_at
-- =========================================

CREATE TRIGGER update_sessions_updated_at
BEFORE UPDATE ON sessions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();