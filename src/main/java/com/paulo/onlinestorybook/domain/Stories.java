package com.paulo.onlinestorybook.domain;

import java.util.HashMap;
import java.util.Optional;

public class Stories {

    private static HashMap<String, Story> STORIES = new HashMap<>();

    static {
        initStories();
    }

    private static void initStories() {
        Story story = Story.builder().text("For ten long years, Robertina searched for any trace of Paulious, her heart heavy with worry and longing. She heard whispers among the forest creatures of a mystical spider's web hidden deep within the Enchanted Grove. The web was said to reveal the location of lost loved ones, a secret guarded by the ancient forest spiders.\n" +
                        "\n" +
                        "Determined to find Paulious, Robertina ventured into the heart of the Enchanted Grove. There, she encountered a wise spider named Arachnia, who listened to her plea. In exchange for a delicate crystal flower from Robertina's garden, Arachnia allowed the spider's web to guide her.\n" +
                        "\n" +
                        "With a trembling heart, Robertina followed the glistening threads of the spider's web, leading her through treacherous paths and forgotten glades. After a perilous journey, she reached a hidden glen where the web pointed. There, she found Paulious, imprisoned in a magical cage of thorns, his once-bright eyes dimmed by years of isolation.\n" +
                        "\n" +
                        "Tears of joy welled up in Robertina's eyes as she used her magic to release him from the thorny prison. Paulious, weak but still recognizable, looked into her eyes, his voice filled with emotion. \"Robertina, you've come for me after all these years.\"\n" +
                        "\n" +
                        "Their reunion was a testament to the strength of their love and the depth of their friendship. As Robertina nursed Paulious back to health, their bond grew stronger, and their conversations became more intimate and profound. Paulious's admiration for Robertina's unwavering dedication only deepened, and he realized that he had fallen in love with her.\n" +
                        "\n" +
                        "Underneath the whispering leaves and the starlit sky, as the Enchanted Grove embraced their love, Paulious finally found the courage to express his feelings. With trembling hands, he took Robertina's and looked into her eyes. \"Robertina, through all the trials and tribulations, my love for you has only grown stronger. I can't hide it any longer. I love you.\"\n" +
                        "\n" +
                        "Touched by his words and the years of patience and friendship that had blossomed into love, Robertina smiled through her tears and replied, \"Paulious, I love you too.\"\n" +
                        "\n" +
                        "And there, in the heart of the mystical forest of Eldertree, beneath the gentle caress of moonlight and the enchanting melody of the night, their love began to bloom, stronger and more beautiful than ever before, as they imagined the future filled with dances and gatherings in Robertina's home.")
                .title("The Journey In Eldertree")
                .build();

        STORIES.put(story.getTitle(), story);
    }

    public static GetStoryResponse getStory(Optional<String> title) {
        if (title.isEmpty()) {
            return new GetStoryResponse(null);
        }

        if (STORIES.containsKey(title.get())) {
            return new GetStoryResponse(STORIES.get(title.get()));
        }

        return new GetStoryResponse(null);
    }
}
