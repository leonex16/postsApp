-- DROP TABLE posts;

CREATE TABLE posts (
	"post_id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" varchar(300) NOT NULL,
	"create_date" timestamp(0) NOT NULL,
	"delete_date" timestamp(0) NOT NULL DEFAULT '9999-12-31 00:00:00'::timestamp without time zone,
	"active" bit(1) NOT NULL DEFAULT '1'::"bit",
	
  CONSTRAINT posts_pkey PRIMARY KEY (post_id)
);

INSERT INTO posts ("name","description","create_date","delete_date","active") VALUES
	 ('post 1','this is the post number one','2021-05-28 11:13:34.000','9999-12-31 00:00:00.000','1'),
	 ('post 2','this is the post number two','2021-05-28 11:16:28.000','9999-12-31 00:00:00.000','0'),
	 ('post 3','this is the post number three','2021-05-28 11:16:36.000','9999-12-31 00:00:00.000','1'),
	 ('post 4','this is the post number four','2021-05-28 11:17:17.000','9999-12-31 00:00:00.000','0');
	 
SELECT * FROM posts;