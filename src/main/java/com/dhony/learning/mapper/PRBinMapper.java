package com.dhony.learning.mapper;

import org.springframework.stereotype.Component;

import com.dhony.learning.DTO.PRBinDTO;
import com.dhony.learning.model.GeoLocation;
import com.dhony.learning.model.PRBin;

@Component
public class PRBinMapper {
	/***
	 * 
	 * @param binDTO
	 * @return a new Entity builded 
	 */
	public PRBin toEntity(PRBinDTO binDTO) {
		PRBin newBin = new PRBin();
		newBin.setBorough(binDTO.getBorough());
		newBin.setSiteType(binDTO.getSiteType());
		newBin.setSiteName(binDTO.getSiteName());
		newBin.setAddress(binDTO.getAddress());
		newBin.setLatitude(binDTO.getLatitude());
		newBin.setLongitude(binDTO.getLatitude());
//		newBin.setLocation(binDTO.getLocation());
		return newBin;
	}
	
	
	public PRBinDTO toDTO(PRBin entity) {
		PRBinDTO newBinDTO = new PRBinDTO();
		newBinDTO.setBorough(entity.getBorough());
		newBinDTO.setSiteType(entity.getSiteType());
		newBinDTO.setSiteName(entity.getSiteName());
		newBinDTO.setAddress(entity.getAddress());
		newBinDTO.setLatitude(entity.getLatitude());
		newBinDTO.setLongitude(entity.getLongitude());
//		newBinDTO.setLocation( new GeoLocation(entity.getLatitude(),entity.getLongitude()));
		return newBinDTO;
	}

}
