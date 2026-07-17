-- ==========================================
-- Seed Data for CodeMentor
-- ==========================================

-- Insert Sample Users
INSERT INTO users (name, email, password_hash)
VALUES
('Harish J', 'harish@example.com', '$2b$10$ExampleHashedPassword123456789'),
('John Doe', 'john@example.com', '$2b$10$ExampleHashedPassword987654321');

-- Insert Sample Code Snippets
INSERT INTO snippets (user_id, language, code)
VALUES
(
    1,
    'Java',
'public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}'
),
(
    2,
    'Python',
'def add(a, b):
    return a + b

print(add(10,20))'
);

-- Insert Sample AI Reviews
INSERT INTO reviews (snippet_id, feedback, model_used)
VALUES
(
    1,
'Good code structure. Consider adding comments and handling exceptions for larger applications.',
'OpenAI GPT-4'
),
(
    2,
'Function is concise and readable. Add type hints and a docstring to improve maintainability.',
'Claude 3.5 Sonnet'
);
