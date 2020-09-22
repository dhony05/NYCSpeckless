package com.dhony.learning.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="PRBins")
public class PRBin {
	
	@Id
	private String id;
	private String borough;
	private String siteType;
	private String siteName;
	private String address;
	private double latitude;
	private double longitude;
	private GeoLocation location ;
	
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getBorough() {
		return borough;
	}
	public void setBorough(String borough) {
		this.borough = borough;
	}
	public String getSiteType() {
		return siteType;
	}
	public void setSiteType(String siteType) {
		this.siteType = siteType;
	}
	public String getSiteName() {
		return siteName;
	}
	public void setSiteName(String siteName) {
		this.siteName = siteName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	public GeoLocation getLocation() {
		
		return location;
	
	}
	public void setLocation(GeoLocation location) {
	
	    this.location = location;
	}
		
	
	@Override
	public String toString() {
		return "PRBin [id=" + id + ", borough=" + borough + ", siteType=" + siteType + ", siteName=" + siteName
				+ ", address=" + address + ", latitude=" + latitude + ", longitude=" + longitude + ", location="
				+ location+ "]";
	}
	

}
