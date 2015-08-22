var React = require('react');
var $ = require('jquery');

var Outfit = React.createClass({
	getInitialState: function () {
			return {
				outfits: []
			}
		},
			componentDidMount: function () {
			this.setState({outfits: [shirts1, shirts2, shirts3]})
		},
			updatePage: function (images) {
			this.setState({outfits: images});
			console.log(this.state.outfits);
		},
	  render: function(){
	  	var imgs = this.state.outfits.map(function(element, index) {
			return (<Images imgs={element} key={index} />);
		});
	  	console.log(imgs)
	  	return(
	    	<div className="row text-center">
				<div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-2">
					<form id="uploadForm" encType="multipart/form-data" action="/api/outfits" method="post" className="form-inline">
						<div className="form-group">
		    			<input type="text" placeholder="Top" name="Top" id="///" className="form-control" />
		    			<input type="text" placeholder="Bottom" name="Bottom" id="///" className="form-control" />
		    			<input type="text" placeholder="Shoes" name="Shoes" id="///" className="form-control" />
		    			<input type="text" placeholder="Outerwear" name="Outerwear" id="///" className="form-control" />
						</div>
						<div className="form-group">
				    	<input type="file" name="userPhoto" />
						</div>
						<div className="form-group">
				    	<input type="submit" value="Save Outfit" name="submit" className="btn btn-success" />
						</div>
  				</form>
				</div>
			</div>
	)}
});
module.exports = Outfit;
