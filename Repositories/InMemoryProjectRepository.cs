using PlannerApp.Entities;
using PlannerApp.Interfaces;

namespace PlannerApp.Repositories;

public class InMemoryProjectRepository : IProjectRepository
{
    private readonly List<Project> _projects = [];
    public void Save(Project project)
    {
        project.Id = GenerateNextId();
        _projects.Add(project);
    }

    public List<Project> GetAll()
    {
        return _projects;
    }

    public Project? GetById(int id)
    {
        return _projects.FirstOrDefault(x => x.Id == id);
    }
    
    private int GenerateNextId()
    {
        return _projects.Count + 1;
    }
}