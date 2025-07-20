package Portfolio.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Portfolio.Entites.contactData;


public interface repository extends JpaRepository<contactData,Integer>{

	  
}
