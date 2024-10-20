using System.ComponentModel.DataAnnotations;

namespace KinstonBackend.Models
{
    public class Enrollment
    {
        /*
        public int EnrollmentId { get; set; }
        public int CourseId { get; set; }
        public int StudentId { get; set; }
        public DateTime EnrolledAt { get; set; } = DateTime.Now;    */

        public int EnrollmentId { get; set; }

        [Required]
        public int CourseId { get; set; } // FK to Course

        [Required]
        public int StudentId { get; set; } // FK to User

        public DateTime EnrolledAt { get; set; } = DateTime.Now;

        public int? Rating { get; set; } // Nullable rating
    }
}
