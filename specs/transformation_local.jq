# errors could be nullable in the response
  .definitions |= with_entries(
    .value |= (
      if (.properties? and .properties.errors?) then
        .properties.errors["x-nullable"] = true
      else
        .
      end
    )
  )
