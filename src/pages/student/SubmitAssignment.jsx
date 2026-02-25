import React, { useState } from 'react';

const SubmitAssignment = () => {
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file');
      return;
    }
    setLoading(true);
    // TODO: Submit assignment and file to the backend
    setTimeout(() => {
      setLoading(false);
      alert('Assignment submitted successfully!');
      setFile(null);
      setNotes('');
    }, 1000);
  };

  return (
    <div className="submit-assignment">
      <div className="card" style={{ maxWidth: '600px' }}>
        <div className="card-header">
          <h2>📄 Submit Assignment</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="assignment">Select Assignment</label>
            <select id="assignment" required>
              <option value="">Choose an assignment...</option>
              <option value="1">React Project</option>
              <option value="2">API Design Task</option>
              <option value="3">Database Design</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="file">Upload File</label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.zip"
              required
            />
            {file && <p style={{ color: '#10b981', marginTop: '0.5rem' }}>✓ {file.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="notes">Additional Notes (Optional)</label>
            <textarea
              id="notes"
              placeholder="Add any notes about your submission..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" disabled={loading} style={{ width: '100%' }}>
            {loading ? '⛅ Submitting...' : '✅ Submit Assignment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitAssignment;
