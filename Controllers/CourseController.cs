/*
 * 
using KinstonBackend.Data;
using KinstonBackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace KinstonBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CoursesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CoursesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Course>> GetCourses()
        {
            return _context.Courses.Where(c => c.IsApproved == false).ToList(); // Return only pending courses
        }

        [HttpPost]
        public IActionResult CreateCourse([FromBody] Course course)
        {
            if (course == null)
                return BadRequest();

            course.IsApproved = false; // Mark as pending approval
            _context.Courses.Add(course);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetCourses), new { id = course.CourseId }, course);
        }

        // Approve or reject a course
        [HttpPost("approve/{id}")]
        public IActionResult ApproveCourse(int id)
        {
            var course = _context.Courses.Find(id);
            if (course == null)
                return NotFound();

            course.IsApproved = true;
            _context.SaveChanges();

            return Ok();
        }

        [HttpPost("reject/{id}")]
        public IActionResult RejectCourse(int id)
        {
            var course = _context.Courses.Find(id);
            if (course == null)
                return NotFound();

            _context.Courses.Remove(course);
            _context.SaveChanges();

            return Ok();
        }

        // Method to get the next module of a course
        [HttpGet("{courseId}/modules/{moduleId}/next")]
        public ActionResult<KinstonBackend.Models.Module> GetNextModule(int courseId, int moduleId)
        {
            var modules = _context.Modules.Where(m => m.CourseId == courseId).OrderBy(m => m.ModuleId).ToList();
            var currentModule = modules.FirstOrDefault(m => m.ModuleId == moduleId);

            if (currentModule == null)
            {
                return NotFound();
            }

            int currentIndex = modules.IndexOf(currentModule);
            if (currentIndex == -1 || currentIndex == modules.Count - 1)
            {
                return NotFound("This is the last module.");
            }

            return modules[currentIndex + 1]; // Move to the next module
        }
    }
}
*/

using KinstonBackend.Data;
using KinstonBackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace KinstonBackend.Controllers
{
    [Route("api/courses")]
    [ApiController]
    [Authorize]
    public class CoursesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CoursesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Course>> GetCourses()
        {
            // Return all approved courses for students
            return _context.Courses.Where(c => c.IsApproved).ToList();
        }

        [HttpPost]
        public IActionResult CreateCourse([FromBody] Course course)
        {
            if (course == null)
                return BadRequest("Course details are required.");

            course.IsApproved = false; // Mark as pending approval
            _context.Courses.Add(course);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetCourses), new { id = course.CourseId }, course);
        }

        [HttpPost("approve/{id}")]
        public IActionResult ApproveCourse(int id)
        {
            var course = _context.Courses.Find(id);
            if (course == null)
                return NotFound();

            course.IsApproved = true;
            _context.SaveChanges();

            return Ok();
        }

        [HttpPost("reject/{id}")]
        public IActionResult RejectCourse(int id)
        {
            var course = _context.Courses.Find(id);
            if (course == null)
                return NotFound();

            _context.Courses.Remove(course);
            _context.SaveChanges();

            return Ok();
        }

        [HttpGet("{courseId}/modules")]
        public ActionResult<IEnumerable<Module>> GetModules(int courseId)
        {
            return _context.Modules.Where(m => m.CourseId == courseId).ToList();
        }
    }
}
