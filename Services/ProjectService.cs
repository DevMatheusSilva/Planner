using PlannerApp.Entities;
using PlannerApp.Interfaces;

namespace PlannerApp.Services;

public class ProjectService(IProjectRepository repository)
{
    public void CreateProject(string name, DateTime startDate, string status, bool isActive)
    {
        var project = new Project(name, startDate, status, isActive);
        repository.Save(project);
    }
    
    public List<Project> GetAllProjects()
    {
        return repository.GetAll();
    }
}