package com.suhmoraes.imageliteapi.application.images;

import com.suhmoraes.imageliteapi.domain.entity.Image;
import com.suhmoraes.imageliteapi.domain.services.ImageServices;
import com.suhmoraes.imageliteapi.infra.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageServices {

    private final ImageRepository repository;

    @Override
    @Transactional
    public Image save(Image image) {
        return repository.save(image);
    }
}
