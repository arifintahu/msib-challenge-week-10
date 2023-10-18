class BaseController {
  handleSuccessResponse = (res, result) => {
    res.json({
      status: "success",
      data: result,
    });
  };
}

module.exports = BaseController;
