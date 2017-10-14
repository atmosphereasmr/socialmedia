INSERT into users (name, pass)
VALUES (${name}, ${pass})
RETURNING contentid;
