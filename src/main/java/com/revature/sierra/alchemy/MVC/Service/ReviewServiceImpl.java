package com.revature.sierra.alchemy.MVC.Service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.sierra.alchemy.MVC.Daos.ReviewsRepository;
import com.revature.sierra.alchemy.MVC.Exceptions.RestaurantNotFoundException;
import com.revature.sierra.alchemy.MVC.Models.Restaurant;
import com.revature.sierra.alchemy.MVC.Models.Reviews;

@Service
public class ReviewServiceImpl implements ReviewService {
	
	private ReviewsRepository reviewrepo;

	
	public ReviewServiceImpl() {
	}
	@Override
	public Reviews create(Reviews newReviews) throws RestaurantNotFoundException  {
		int id = reviewrepo.save(newReviews).getId();
		if(id != 0) {
			newReviews.setId(id);
			return newReviews;
		} else {
			throw new RestaurantNotFoundException();
		}
		
	}

	@Override
	public List<Reviews> getReviews(Restaurant restaurant_id) {
		return reviewrepo.findByRestaurantId(restaurant_id.getId());
	}

	
	

}
