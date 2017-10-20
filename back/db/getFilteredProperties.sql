SELECT
  *
FROM
  properties
LEFT JOIN
  users
    ON properties.user_id = users.user_id
WHERE
  properties.user_id = $1
    AND
      properties.desired_rent <= $2
