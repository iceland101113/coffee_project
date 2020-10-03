Sidekiq.configure_server do |config|
  config.redis = { url: 'redis://localhost:6379/1' } #标准格式 config.redis = { url: "redis://#{redis_server}:#{redis_port}/#{redis_db_num}", namespace: redis_namespace }
end
Sidekiq.configure_client do |config|
  config.redis = { url: 'redis://localhost:6379/1' } #标准格式 config.redis = { url: "redis://#{redis_server}:#{redis_port}/#{redis_db_num}", namespace: redis_namespace }
end