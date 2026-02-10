import React, { useState, useEffect } from 'react';

const AdminForm = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tools: '',
    impact: '',
    link: '',
    linkText: ''
  });

  useEffect(() => {
    if (project) {
      setFormData(project);
    }
  }, [project]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="admin-form-overlay">
      <form className="admin-form" onSubmit={handleSubmit}>
        <h3>{project ? 'Edit Project' : 'Add New Project'}</h3>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input name="tools" placeholder="Tools/Skills Used" value={formData.tools} onChange={handleChange} required />
        <textarea name="impact" placeholder="Outcome/Impact" value={formData.impact} onChange={handleChange} required />
        <input name="link" placeholder="Link (optional)" value={formData.link} onChange={handleChange} />
        <input name="linkText" placeholder="Link Text (optional)" value={formData.linkText} onChange={handleChange} />
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;