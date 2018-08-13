module Sessionable
    def auth_key_for_user(email)
        user = User.find_by(email: email)
        #puts '*************'
        #puts user.id
        #puts Knock::AuthToken
        token = Knock::AuthToken.new(payload: { sub: user.id }).token
        "Bearer #{token}"
    end
end