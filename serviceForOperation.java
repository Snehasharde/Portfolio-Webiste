package Portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Portfolio.Entites.contactData;
import Portfolio.Repository.repository;

@Service
public class serviceForOperation implements serviceProvider {

	@Autowired
	private repository repo;
	
	@Override
	public boolean saveContactData(contactData data) {
		// TODO Auto-generated method stub
		boolean status =false;
		if(data != null)
		{
			repo.save(data);
			status =true;
		}
		else {
			status = false;
		}
		return status;
	}

}
