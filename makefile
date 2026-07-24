publish: 
	yarn publish --access public

act-pull:
	act pull_request \
	--secret-file .env \
	-P ubuntu-latest=catthehacker/ubuntu:act-latest

release:
	yarn version --patch
	git push
	git push --tags
# 	yarn version patch
# git push
# git push --tags