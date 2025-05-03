using PlannerApp.Entities;
using PlannerApp.Repositories;
using PlannerApp.Services;

namespace PlannerApp.Presentation.Lib;

public class ProjectHandler
{
    private readonly ProjectService _projectService = new(
        new InMemoryProjectRepository()
    );

    public void CreateProject(string name, DateTime startDate, string status, bool isActive)
    {
        ValidateInputs(name, status);
        _projectService.CreateProject(name, startDate, status, isActive);
    }

    public List<Project> GetAllProjects()
    {
        return _projectService.GetAllProjects();
    }

    private static void ValidateInputs(params object?[] inputs)
    {
        foreach (var input in inputs)
        {
            ArgumentNullException.ThrowIfNull(input);
        }
    }
}