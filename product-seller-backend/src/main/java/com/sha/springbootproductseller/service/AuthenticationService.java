package com.sha.springbootproductseller.service;

import com.sha.springbootproductseller.model.User;


public interface AuthenticationService {

    User signInAndReturnJWT(User signInRequest);

}
