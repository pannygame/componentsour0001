 var options = {
	 thumbnailData: [{
      title: 'Inbo',
      number: 132,
      header: 'Learn React',
      description: 'React is fantastic new library for making fast, dynamic pages.',
      imageURL: 'http://formatjs.io/img/react.svg'
    },
    {
      title: 'Inbo',
      number: 19999,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow. ',
      imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
    }]

};

{/*options = {thumbnailData: [ {}, {}, {} ]}*/}

//React, please
	var element = React.createElement(Thumbnaillist, options);//en stk pepperkake

	React.render(element ,document.querySelector('.target'));
{/*bootstrap and top level stuff*/}
var Badge = React.createClass(
	{displayName: "Badge",
		render: function() {
			return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
          this.props.title, " ", React.createElement("span", {class: "badge"}, this.props.number)
        )
		}
	});
	var Thumbnaillist = React.createClass({displayName: "Thumbnaillist",
		render: function() {
			var list = this.props.thumbnailData.map(function(thumbnailProps){
				return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
			});


			return React.createElement("div", null, 

			list
			)
		}
	
	});

var Thumbnail = React.createClass({displayName: "Thumbnail",
		render: function(){
			return React.createElement("div", {className: "thumbnail"}, 
		      React.createElement("img", {src: this.props.imageURL}), 
		      React.createElement("div", {className: "caption"}, 
		        React.createElement("h3", null, this.props.header), 
		        React.createElement("p", null, this.props.description), 
		        React.createElement("p", null, 
			        React.createElement(Badge, {title: this.props.title, number: this.props.number})
		        )
		      )
    		)
		}

	});