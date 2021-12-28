using System.ComponentModel.DataAnnotations;

namespace ReactJS_CP.Models
{
    public class LoginModel
    {

        [Required(ErrorMessage = "email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
