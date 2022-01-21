import { ajax, fixture, StacheElement, type } from "//unpkg.com/can@pre/core.mjs";

fixture("POST /api/session", function(request, response) {
    const userData = localStorage.getItem("user");
    if (userData) {
        const user = JSON.parse(userData);
        const requestUser = request.data.user;
        if (
            user.Email === requestUser.Email &&
            user.Password === requestUser.Password
        ) {
            return request.data;
        } else {
            response(401, { message: "Unauthorized" }, {}, "unauthorized");
        }
    }
    response(401, { message: "Unauthorized" }, {}, "unauthorized");
});
fixture("GET /api/session", function(request, response) {
    const session = localStorage.getItem("session");
    if (session) {
        response(JSON.parse(session));
    } else {
        response(404, { message: "No session" }, {}, "unauthorized");
    }
});
fixture("DELETE /api/session", function() {
    localStorage.removeItem("session");
    return {};
});
fixture("POST /api/users", function(request) {
    const session = {
        user: { email: request.data.email }
    };
    localStorage.setItem("user", JSON.stringify(request.data));
    localStorage.setItem("session", JSON.stringify(session));

    return session.user;
});

{signUp(event);
    event.preventDefault();
    this.sessionPromise = ajax({
        url: "/api/users",
        type: "post",
        data: {
            email: this.email,
            password: this.password
        }
    }).then(function(user) {
        return { user: user };
    });
}

customElements.define(Signup);