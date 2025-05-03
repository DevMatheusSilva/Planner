using PlannerApp.Entities;

namespace PlannerApp.Interfaces;

public interface IProjectRepository
{
    public void Save(Project project);
    public List<Project> GetAll();
    public Project? GetById(int id);
}
