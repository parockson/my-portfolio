import React, { useState, useEffect } from 'react';
import AdminForm from './AdminForm';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Load projects from localStorage on mount
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('portfolioProjects')) || [];
    setProjects(storedProjects);
  }, []);

  // Save to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
  }, [projects]);

  const handleAdd = () => {
    setEditingProject(null);
    setShowForm(true);
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleSave = (project) => {
    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? { ...project, id: editingProject.id } : p));
    } else {
      setProjects([...projects, { ...project, id: Date.now() }]); // Simple ID generation
    }
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Manage Projects</h2>
      <button className="btn-primary" onClick={handleAdd}>Add New Project</button>
      <ul className="admin-list">
        {projects.map(project => (
          <li key={project.id} className="admin-item">
            <span>{project.title}</span>
            <div>
              <button onClick={() => handleEdit(project)}>Edit</button>
              <button onClick={() => handleDelete(project.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {showForm && (
        <AdminForm
          project={editingProject}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Admin;