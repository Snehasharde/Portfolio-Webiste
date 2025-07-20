package Portfolio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;


import Portfolio.Entites.contactData;
import Portfolio.service.serviceForOperation;

@Controller
public class MyController {

	@Autowired
	private serviceForOperation serv;
	
 
	@GetMapping("/home")
	public String openHomePage()
	{
		return "index";
	}
	
	@PostMapping("/contactForm")
	public String submitForm(@ModelAttribute("data") contactData Data)
	{
		boolean b = serv.saveContactData(Data);
		if(b)
		{
			System.out.println("yes");
		}
		else {
			System.out.println("No");
		}
		return "index";
	}
}
