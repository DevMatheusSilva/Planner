namespace PlannerApp.Entities;

public class Project(string name, DateTime startDate, string status, bool isActive) : DomainEntity(0)
{
    private string Name { get; set; } = name;
    private DateTime StartDate { get; set; } = startDate;
    private string Status { get; set; } = status;
    private bool IsActive { get; set; } = isActive;
    
    public override string ToString()
    {
        return $"Project: {Name}, Start Date: {StartDate}, Status: {Status}, Active: {IsActive}";
    }
}