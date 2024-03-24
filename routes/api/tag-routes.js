const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.post('/', async (req, res) => {
//   try {
//     const tagData = await Tag.create(req.body);
//     res.status(200).json(tagData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    // Update tag data
    const [updateResult] = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // If no rows were updated, then the tag with the provided ID does not exist
    if (updateResult === 0) {
      return res.status(404).json({ message: 'No tag found with this id!' });
    }

    // If the update was successful, fetch the updated tag to return it
    const updatedTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    // If the tag was found
    if (updatedTag) {
      res.status(200).json(updatedTag);
    } else {
      res.status(404).json({ message: 'No tag found with this id after update!' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
