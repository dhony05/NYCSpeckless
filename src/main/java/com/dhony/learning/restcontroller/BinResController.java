package com.dhony.learning.restcontroller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dhony.learning.model.PRBin;
import com.dhony.learning.service.BinService;

@RestController
@RequestMapping("/api")
public class BinResController {

		
		private final BinService binService;
		
		public BinResController (BinService binService) {
			this.binService = binService;
		}
		
		
		
		@GetMapping("/allbins")
		public List<PRBin> getAllBins() {
			return binService.findAllBins();
			
		}
		
		@GetMapping("/allbins/borough/{borough}")
		public List<PRBin> getAllBinsInBorough(@PathVariable String borough){
			return binService.findByBorough(borough);
		}
		
		@GetMapping("/allbins/sitetype/{sitetype}")
		public List<PRBin> getAllBinsBySiteType(@PathVariable String sitetype){
			return binService.findBySiteType(sitetype);
		}
		
	
}
