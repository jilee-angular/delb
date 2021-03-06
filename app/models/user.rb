class User < ActiveRecord::Base
  has_many :authentication_tokens
  has_many :list
  has_many :item
  
  before_save -> do
    self.uid = SecureRandom.uuid
    skip_confirmation!
  end

  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable,
          :token_authenticatable

  include DeviseTokenAuth::Concerns::User


end
