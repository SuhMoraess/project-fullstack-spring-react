package com.suhmoraes.imageliteapi.infra.repository;

import com.suhmoraes.imageliteapi.domain.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String>{
}
