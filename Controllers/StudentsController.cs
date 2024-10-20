/*
using KinstonBackend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KinstonBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StudentsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Get pending students (IsActive == 0)
        [HttpGet("pending")]
        public IActionResult GetPendingStudents()
        {
            var pendingStudents = _context.Users
                .Where(u => u.Role == "Student" && u.IsActive == 0)
                .ToList();

            return Ok(pendingStudents);
        }

        // Approve a student (set IsActive to 1)
        [HttpPost("approve/{id}")]
        public IActionResult ApproveStudent(int id)
        {
            var student = _context.Users.FirstOrDefault(u => u.Id == id && u.Role == "Student");
            if (student == null)
            {
                return NotFound();
            }

            student.IsActive = 1;
            _context.SaveChanges();
            return Ok();
        }

        // Reject a student (delete from DB or handle as needed)
        [HttpPost("reject/{id}")]
        public IActionResult RejectStudent(int id)
        {
            var student = _context.Users.FirstOrDefault(u => u.Id == id && u.Role == "Student");
            if (student == null)
            {
                return NotFound();
            }

            _context.Users.Remove(student);
            _context.SaveChanges();
            return Ok();
        }
    }

}
*/

using KinstonBackend.Data;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public StudentsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // Get pending students (IsActive == false)
    [HttpGet("pending")]
    public IActionResult GetPendingStudents()
    {
        var pendingStudents = _context.Users
            .Where(u => u.Role == "Student" && u.IsActive == false) // Using bool comparison
            .ToList();

        return Ok(pendingStudents);
    }

    // Approve a student (set IsActive to true)
    [HttpPost("approve/{id}")]
    public IActionResult ApproveStudent(int id)
    {
        var student = _context.Users.FirstOrDefault(u => u.UserId == id && u.Role == "Student"); // Using correct property

        if (student == null)
        {
            return NotFound();
        }

        student.IsActive = true;
        _context.SaveChanges();
        return Ok();
    }

    // Reject a student (delete from DB or handle as needed)
    [HttpPost("reject/{id}")]
    public IActionResult RejectStudent(int id)
    {
        var student = _context.Users.FirstOrDefault(u => u.UserId == id && u.Role == "Student"); // Using correct property

        if (student == null)
        {
            return NotFound();
        }

        _context.Users.Remove(student);
        _context.SaveChanges();
        return Ok();
    }
}
