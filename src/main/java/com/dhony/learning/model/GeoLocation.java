package com.dhony.learning.model;




public class GeoLocation {

	
	private double latitude;
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	private double longitude;
	
	public GeoLocation(double latitude, double longitude) {
		latitude = this.latitude;
		longitude = this.longitude;
	}
	
	 // returns the latitude of this geo location
    public double getLatitude() {
        return latitude;
    }

    // returns the longitude of this geo location
    public double getLongitude() {
        return longitude;
    }

    // returns a string representation of this geo location
    public String toString() {
        return "latitude: " + latitude + ", longitude: " + longitude;
    }
	
	
	
}
