package com.dhony.learning.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dhony.learning.model.PRBin;

public interface BinRepository extends MongoRepository<PRBin,String>{

	
  public List<PRBin> findAllByBorough(String borough);
  

  public List<PRBin> findAllBySiteType(String siteType);
}
