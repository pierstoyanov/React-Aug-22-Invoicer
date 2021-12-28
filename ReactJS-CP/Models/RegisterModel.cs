using System.ComponentModel.DataAnnotations;

namespace ReactJS_CP.Models
{
    public class RegisterModel
    {  
        public string Username { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Pass is required")]
        public string Password { get; set; }
    }
}
