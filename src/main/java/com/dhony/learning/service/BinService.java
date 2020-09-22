package com.dhony.learning.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dhony.learning.model.GeoLocation;
import com.dhony.learning.model.PRBin;
import com.dhony.learning.repository.BinRepository;

@Service
public class BinService {

	
	@Autowired
	 private BinRepository binrepository;
	
	
	public List<PRBin> findAllBins(){
		return binrepository.findAll();
	}
	
	
	public List<PRBin> findByBorough(String borough){
		String newBorough = borough.substring(0,1).toUpperCase()+borough.substring(1).toLowerCase();
		List<PRBin> gLocation = binrepository.findAllByBorough(newBorough).stream()
				.filter(l -> l.getLocation()!= null)
				.collect(Collectors.toList());
				System.out.println(gLocation);
		
		return binrepository.findAllByBorough(newBorough);
	}
	
	
	public List<PRBin> findBySiteType(String siteType){
		return binrepository.findAllBySiteType(siteType);
	}
}
