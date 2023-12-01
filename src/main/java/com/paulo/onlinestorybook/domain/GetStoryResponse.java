package com.paulo.onlinestorybook.domain;

import com.paulo.onlinestorybook.domain.Story;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class GetStoryResponse {

    private Story story;
}
