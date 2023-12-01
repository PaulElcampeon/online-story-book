package com.paulo.onlinestorybook.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class Story {
    private String title;
    private String text;
}
