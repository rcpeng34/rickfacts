Rick Facts - Playing with Twilio?

Design

/addmessage with message to add
/removemessage with message to remove
/addnumber with number to add
/removenumber with number to remove

/ with index that shows lists of numbers and messages
/getmessages returns a list of all messages
/getnumbers returns a list of all numbers

cron job every hour to send out the text


MYSQL Tables
+-------------+--------------+------+-----+---------+-------+
| Field       | Type         | Null | Key | Default | Extra |
+-------------+--------------+------+-----+---------+-------+
| number      | bigint(20)   | NO   | PRI | 0       |       |
| first_name  | varchar(160) | YES  |     | NULL    |       |
| last_name   | varchar(160) | YES  |     | NULL    |       |
| last_msg    | datetime     | YES  |     | NULL    |       |
| repeat_time | bigint(20)   | YES  |     | NULL    |       |
| tags        | blob         | YES  |     | NULL    |       |
+-------------+--------------+------+-----+---------+-------+

+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| fact_id | int(11)      | NO   | PRI | NULL    | auto_increment |
| message | varchar(160) | YES  |     | NULL    |                |
| tags    | blob         | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
