package com.bcrypt;

import org.assertj.core.api.Assertions;
import org.junit.Test;

public class BCryptTest {

    @Test
    public void should_create_salt() {
        String gensalt = BCrypt.gensalt();
        Assertions.assertThat(gensalt).isNotEmpty();
    }

    @Test
    public void should_create_hash_from_salt() {
        String hashpw = BCrypt.hashpw("1234", BCrypt.gensalt());
        Assertions.assertThat(hashpw).isNotEmpty();
    }

}
