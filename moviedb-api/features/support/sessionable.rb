module Sessionable
    def auth_key_for_user(email)
        user = User.find_by(email: email)
        token = Knock::AuthToken.new(payload: { sub: user.id }).token
        "Bearer #{token}"
    end
end