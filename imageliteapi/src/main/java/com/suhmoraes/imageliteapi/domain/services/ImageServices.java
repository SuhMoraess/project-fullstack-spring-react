package com.suhmoraes.imageliteapi.domain.services;

import com.suhmoraes.imageliteapi.domain.entity.Image;
import org.springframework.stereotype.Service;

public interface ImageServices {
    Image save(Image image);
}
