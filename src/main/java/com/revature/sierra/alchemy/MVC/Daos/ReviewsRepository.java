package com.revature.sierra.alchemy.MVC.Daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.sierra.alchemy.MVC.Models.Restaurant;
import com.revature.sierra.alchemy.MVC.Models.Reviews;

@Repository
public interface ReviewsRepository extends JpaRepository<Reviews, Integer> {

	@Query(value = "SELECT * from Reviews where restaurant_id=?1", nativeQuery = true)
	public List<Reviews> findByRestaurantId(int restaurantId);
}
